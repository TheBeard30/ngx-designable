import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-design-svg',
  standalone: true,
  template: `
    <svg
      viewBox="0 0 1260 1024"
      [attr.width]="width"
      [attr.height]="height"
      fill="currentColor"
      focusable="false"
      aria-hidden="true"
    >
      <path
        d="M166.137305 564.657231a35.603692 35.603692 0 1 1 71.168 0 35.603692 35.603692 0 0 1-71.168 0z m54.744615-179.830154a55.847385 55.847385 0 1 1 111.694769 0 55.847385 55.847385 0 0 1-111.655384 0z m206.296615-146.313846a72.073846 72.073846 0 1 1 144.108308 0 72.073846 72.073846 0 0 1-144.108308 0z m272.541539 0a90.466462 90.466462 0 1 1 180.972308 0 90.466462 90.466462 0 0 1-180.972308 0z m549.021538-88.103385a31.783385 31.783385 0 0 1 3.15077 44.819692L771.596997 748.307692l-108.740923 75.657846 60.612923-119.138461L1202.858535 152.733538a31.783385 31.783385 0 0 1 44.859077-3.150769l0.945231 0.787693z m-82.156307 307.003077a32.413538 32.413538 0 0 1 32.295384 34.973539h0.118154c-2.56 29.459692-73.058462 298.535385-269.981538 415.350153-328.192 194.717538-543.350154 48.758154-586.358154-20.755692-29.696-48.009846-52.381538-100.864-69.710769-120.792615-27.214769-31.192615-150.055385 43.244308-233.944616-50.845539-83.928615-94.129231-58.525538-470.449231 343.276308-651.027692 367.931077-165.336615 631.414154 36.155077 673.161846 71.286154a31.428923 31.428923 0 1 1-38.990769 49.348923C917.241305 102.4 719.530535 28.199385 487.358228 89.796923 155.542843 176.206769 21.674535 525.351385 78.388382 660.046769c30.523077 72.467692 175.852308 6.222769 233.314461 53.996308 21.425231 17.801846 59.037538 91.254154 83.731692 134.774154 44.898462 79.281231 286.72 140.996923 497.979077 3.820307 195.820308-127.133538 240.718769-365.331692 240.71877-365.331692h0.118153a32.413538 32.413538 0 0 1 32.295385-29.892923z"
        p-id="3059"
      ></path>
    </svg>
  `
})
export class DesignSvg {
  @Input() width: string | number = '1em';

  @Input() height: string | number = '1em';
}
