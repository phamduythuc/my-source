import {
    Component,
    Input,
    HostBinding,
    Output,
    EventEmitter,
    ChangeDetectorRef,
    OnChanges,
    SimpleChanges,
    OnInit,
    OnDestroy
} from '@angular/core';
import {AlertService} from './alert.service';
import {AlertAppearance, AlertType, ButtonType} from './alert.types'
import {coerceBooleanProperty} from "@angular/cdk/coercion";

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnChanges, OnInit, OnDestroy {
    @Input() appearance: AlertAppearance = "border";
    @Input() typeAlert: AlertType = 'primary';
    @Input() showIcon: boolean = true;
    @Input() content: { type: AlertType, message: string } = {type: 'success', message: ''}
    @Input() dismissed: boolean = false;
    @Input() showButton: ButtonType = 'close';
    @Output() readonly dismissedChanged: EventEmitter<boolean> = new EventEmitter<boolean>() ;

    constructor(private alertService: AlertService, private changeDetector: ChangeDetectorRef) {
    }

    @HostBinding('class') get classList(): any {
        return {
            'alert-appearance-fill': this.appearance === 'fill',
            'alert-appearance-border': this.appearance === 'border',
            'alert-dismissed': this.dismissed,

            'alert-type-error': this.typeAlert === 'error',
            'alert-type-success': this.typeAlert === 'success',
            'alert-type-warning': this.typeAlert === 'warning',

        }
    }
    ngOnChanges (changes: SimpleChanges): void {
        if('dismissed' in changes) {
        this.dismissed = coerceBooleanProperty(changes?.['dismissed'].currentValue);
        this.toggleDismiss(this.dismissed);

        }
    }
    ngOnInit() {

    }
    ngOnDestroy() {
        console.log('xoa')
    }

    dismiss() {
        if (this.dismissed) {
            return
        }
        this.toggleDismiss(true);
    }

    show(): void {
        if (!this.dismissed) {
            return
        }
        this.toggleDismiss(false)
    }

    toggleDismiss(dismissed: boolean): void {
        this.dismissed = dismissed;
        this.dismissedChanged.next(this.dismissed);
        this.changeDetector.markForCheck()

    }
}
