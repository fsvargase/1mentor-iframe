import { Component, AfterViewInit } from '@angular/core';
import * as iFrameResize from 'iframe-resizer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'iframe-para-react';

  ngAfterViewInit() {
    // Inicializar el iframe una vez que la vista esté lista.
    this.initIframe();
  }

  private initIframe() {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://dev-test.1mentor.io/auth/login'; // Reemplaza esto con la URL correcta de la aplicación React.
    iframe.id = 'reactIframe';
    iframe.style.width = '100vw';
    iframe.style.height = '80vh';
    iframe.style.border = 'none';

    const container = document.getElementById('reactAppContainer');
    container?.appendChild(iframe);

    // Inicializar el ajuste automático de la altura del iframe con iframe-resizer.
    iFrameResize({
      log: false,
      autoResize: true,
      checkOrigin: false,
      minHeight: 400, // Altura mínima para evitar que el iframe sea demasiado pequeño.
    }, '#reactIframe');
  }
}

