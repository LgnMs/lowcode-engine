import { isReactClass, wrapReactClass } from '@alilc/lowcode-utils';

function ucfirst(s: string) {
  return s.charAt(0).toUpperCase() + s.substring(1);
}
function getDeviceView(view: any, device: string, mode: string) {
  if (!view || typeof view === 'string') {
    return view;
  }

  // compatible vision Mobile | Preview
  device = ucfirst(device);

  if (view.hasOwnProperty(device) && view[device]) {
    view = isReactClass(view[device]) ? view[device] : wrapReactClass(view[device]);
  }
  mode = ucfirst(mode);
  if (mode === 'Preview' && view.hasOwnProperty(mode)) {
    view = isReactClass(view[mode]) ? view[mode] : wrapReactClass(view[mode]);
  }
  return view;
}

export default {
  getDeviceView,
};
