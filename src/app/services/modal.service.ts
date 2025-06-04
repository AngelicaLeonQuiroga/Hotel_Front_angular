import { ApplicationRef, ComponentRef, createComponent, EnvironmentInjector, Injectable, Renderer2, RendererFactory2, Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private callbackClose!:(() =>void  | undefined) | undefined;
  private render: Renderer2
  private containerModal!: HTMLDivElement;
  private componentRef!: ComponentRef<unknown>;

  constructor(private renderFactory : RendererFactory2, 
    private envInjector: EnvironmentInjector, 
    private appRef: ApplicationRef) {
      this.render = this.renderFactory.createRenderer(null,null)
   }

  public open(Component: Type<unknown>, callbackClose?: ()=> void){
    this.callbackClose = callbackClose;
    this.containerModal = this.containerModal || this.render.createElement('div');
    const overlayDiv = this.render.createElement('div');

    this.render.setStyle(overlayDiv,'position', 'fixed');
    this.render.setStyle(overlayDiv,'top', '0');
    this.render.setStyle(overlayDiv,'left', '0');
    this.render.setStyle(overlayDiv,'with', '100%');
    this.render.setStyle(overlayDiv,'height', '100%');
    this.render.setStyle(overlayDiv,'backgroundColor', 'rgba(0, 0, 0, 0.5)');
    this.render.setStyle(overlayDiv,'zIndex', '1000');// el 1000 representa la posicion del modal es decir superior a lo de atras 
    this.render.appendChild(document.body,overlayDiv);

    this.render.setStyle(this.containerModal,'position', 'fixed');
    this.render.setStyle(this.containerModal,'top', '50%');
    this.render.setStyle(this.containerModal,'left', '50%');
    this.render.setStyle(this.containerModal,'transform', 'translate(-50%, -50%)');
    this.render.setStyle(this.containerModal,'backgroundColor', '#fff');
    this.render.setStyle(this.containerModal,'padding', '20px');
    this.render.setStyle(this.containerModal,'borderRadius', '8px');
    this.render.setStyle(this.containerModal,'boxShadow', '0 4px 6px rgba(0,0,0,0.1)');
    this.render.setStyle(this.containerModal,'zIndex', '1001');// el 1000 representa la posicion del modal es decir superior a lo de atras 
    this.render.appendChild(overlayDiv, this.containerModal);
    this.render.setAttribute(this.containerModal, 'name','app-modal-container');

    const instanceComponent = createComponent (Component, {environmentInjector: this.envInjector});
    (instanceComponent.instance as{modalService: ModalService}).modalService=this;
    this.appRef.attachView(instanceComponent.hostView);

    this.render.appendChild(this.containerModal,(instanceComponent.hostView as any).rootNodes[0]);
    this.componentRef = instanceComponent;
    return{
      instance: instanceComponent,
      nodeHtml: this.containerModal,
      close: this.close.bind(this)
    }
  }
   public close(){
      const modalDiv = this.componentRef.location.nativeElement.parentElement;
      const overlayDiv = modalDiv?.parentElement;
      if(overlayDiv){
        this.render.removeChild(document.body, overlayDiv);
      };
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.callbackClose && this.callbackClose();

    };

}
