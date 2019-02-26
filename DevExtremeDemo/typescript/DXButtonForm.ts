/// <reference path="../wwwroot/js/lib/devextreme/ts/dx.all.d.ts" />

export class DXButtonForm {
  private btnDemo: DevExpress.ui.dxButton;

  constructor(private btnElement: string) {
    this.initialize();
  }

  private initialize(): void {
    let btnDemoOptions: DevExpress.ui.dxButtonOptions = {
      'text': 'Click to disable',
      'type': 'success',
      'stylingMode': "outlined",
      'onClick': this.btnDemo_click
    };

    this.btnDemo = new DevExpress.ui.dxButton($(this.btnElement), btnDemoOptions);
  }

  private btnDemo_click = () => {
    alert('The button will be disabled!');
    this.btnDemo.option('disabled', true);
  };
}

//