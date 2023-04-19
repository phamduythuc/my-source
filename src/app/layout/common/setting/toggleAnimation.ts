import {state, style, transition, trigger, animate} from "@angular/animations";

export const toggleAnimation = trigger('toggleAnimation', [
  state('*', style({
    transform: 'translateX(0)'
  })),
  state('void', style({
    transform: 'translateX(-100%)'
  })),
  transition('void => false', animate('.3s ease-in')),
  transition('void => *', animate('.3s ease-out'))
])
