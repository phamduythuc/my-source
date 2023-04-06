import {state, style, transition, trigger, animate} from "@angular/animations";

export const searchAnimation = trigger('searchAnimation', [
    state('*', style({
        transform: 'translateY(0)'
    })),
    state('void', style({
        transform: 'translateY(-100%)'
    })),
    transition('void => false', animate('.3s ease-in')),
    transition('void => *', animate('.3s ease-out'))
])
