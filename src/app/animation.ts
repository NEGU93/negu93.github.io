import { trigger, state, style, transition, animate } from '@angular/animations';

export const Animations = {
    Triggers: [
        trigger('fadeInOut', [
            state('void', style({
              opacity: 0
            })),
            transition('void <=> *', animate(1000)),
        ]),
        trigger('EnterFromLeft', [
            state('void', style({ transform: 'translateX(0)', opacity: 0 })),
            transition('void <=> *', [
              style({ transform: 'translateX(-100%)' }),
              animate('0.5s 500ms ease-in')
            ]),
        ]),
        trigger('EnterFromRight', [
            state('void', style({ transform: 'translateX(0)', opacity: 0 })),
            transition('void <=> *', [
              style({ transform: 'translateX(100%)' }),
              animate('0.5s 500ms ease-in')
            ]),
        ]),
        trigger("zoom", [
            state('void', style({transform: 'scale(0.3)', transformOrigin: 'left bottom', opacity: '0'})),,
            transition("void <=> *", animate( "2000ms cubic-bezier(0.25,1,.25,1)" ))
        ])
    ]

}