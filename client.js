// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  //const myFlatSurface = new Surface(
  //    500, /* width */
  //    600, /* height */
  //    Surface.SurfaceShape.Cylinder /* shape */
  //);

  /*
  const menu = new Surface(500, 800, Surface.SurfaceShape.Flat);
  menu.setAngle(3, 0);
  r360.renderToSurface(
      r360.createRoot('Hello2', {}),
      menu,
  )*/

  /*const leftPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  leftPanel.setAngle(-0.6, 0);
  const rightPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  //const rightPanel = new Surface(300, 600);
  rightPanel.setAngle(0.6, 0.1);

  r360.renderToSurface(
      r360.createRoot('Hello2'),
      leftPanel,
  );
  r360.renderToSurface(
      r360.createRoot('Hello2'),
      rightPanel,
  );
  */


  // Render your app content to the default cylinder surface
  /*r360.renderToSurface(
    r360.createRoot('Hello360', { }),
    r360.getDefaultSurface()
      //myFlatSurface
  );*/

  /*r360.renderToSurface(
      r360.createRoot('Hello2'),
      myFlatSurface,
  );*/

  //const surfaceMenu = r360.getDefaultSurface()
  const surfaceMenu = new Surface(300, 600, Surface.SurfaceShape.Flat);
  const surfaceList = new Surface(1000, 600, Surface.SurfaceShape.Flat);
  const surfaceImage = new Surface(280, 280, Surface.SurfaceShape.Flat);

  r360.renderToSurface(
      r360.createRoot('Menu', { }),
      surfaceMenu
  );
  r360.renderToSurface(
      r360.createRoot('ProductList', { }),
      surfaceList
  );
  surfaceMenu.setAngle(-0.5, 0);
  surfaceList.setAngle(0.5, 0);
  r360.renderToSurface(
      r360.createRoot('ProductImage', { }),
      surfaceImage
  );
  surfaceImage.setAngle(1, 0);

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};
