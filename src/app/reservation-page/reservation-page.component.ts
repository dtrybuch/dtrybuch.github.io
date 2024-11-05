
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DateRange, DefaultMatCalendarRangeStrategy, MAT_DATE_RANGE_SELECTION_STRATEGY } from '@angular/material/datepicker';
import { Title } from '@angular/platform-browser';
import * as moment from 'moment';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: DefaultMatCalendarRangeStrategy,
    },
  ],
})
export class ReservationPageComponent {
  title: string = "Zarezerwuj";

  personal: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
    rodo: new FormControl(false, [Validators.required]),
  });

  get firstNameInput() { return this.personal.get('firstName'); }
  get lastNameInput() { return this.personal.get('lastName'); }
  get emailInput() { return this.personal.get('email'); }
  get phoneNumberInput() { return this.personal.get('phoneNumber'); }
  get rodoInput() { return this.personal.get('rodo'); }

  selectedDateRange!: DateRange<Date>;

  calendarMaxDate: Date = new Date(8640000000000000);

  reservedDates: Date[] = [new Date(2024, 10, 24), new Date(2024, 10, 22)].sort((a, b) => a.getTime() - b.getTime());

  tmpReservedDates: Date[] = this.reservedDates;

  maxDate = this.calendarMaxDate;

  minDate = new Date();

  pricePerDay : { [key: string]: number } = { '20.11.2024': 1000, '21.11.2024': 2000 };

  defaultPricePerDay : number = 800;

  price!: number;

  /**
   *
   */
  constructor(private mainTitle: Title) {
    this.mainTitle.setTitle(this.title);
  }

  _onSelectedChange(date: Date | null): void {
    if (date) {
      if (
        date &&
        this.selectedDateRange &&
        this.selectedDateRange.start &&
        date > this.selectedDateRange.start &&
        !this.selectedDateRange.end
      ) {
        this.selectedDateRange = new DateRange(
          this.selectedDateRange.start,
          date
        );
        this.maxDate = this.calendarMaxDate;
        this.tmpReservedDates = this.reservedDates;

        this._countPrice();

      } else {
        this.selectedDateRange = new DateRange(date, null);
        let filteredReservation = this.tmpReservedDates.filter(reserveDate => date?.getTime() < reserveDate.getTime())
        this.maxDate = filteredReservation[0];
        this.tmpReservedDates = this.tmpReservedDates.filter(reserveDate => reserveDate != filteredReservation[0]);
      }
    }
  }

  myFilter = (d: Date | null): boolean => {
    const day = d || new Date();
    return this.tmpReservedDates.every(date => date.getTime() !== day.getTime());;
  };

  isAnyError() {
    return this.selectedDateRange?.start == null || this.selectedDateRange?.end == null || this.firstNameInput?.errors || this.lastNameInput?.errors || this.emailInput?.errors || this.phoneNumberInput?.errors || this.rodoInput?.value == false;;
  }

  submitReservation() {
  
    // let order: UserWithAddressDTO = {
    //   firstName: this.firstNameInput?.value,
    //   lastName: this.lastNameInput?.value,
    //   city: this.cityInput?.value,
    //   street: this.streetInput?.value,
    //   homeNumber: this.homeNumberInput?.value,
    //   postalCode: this.postalCodeInput?.value,
    //   phoneNumber: this.phoneNumberInput?.value,
    // }

    // this.userService.updateUserData(order).subscribe({
    //   next: order => {
    //     this._snackBar.openFromComponent(NotificationComponent, {
    //       data: { notificationMessage: "Zaktualizowano dane!" },
    //       duration: 3 * 1000,
    //       horizontalPosition: 'center',
    //       verticalPosition: 'bottom'
    //     });
    //   },
    //   error: err => {
    //   }
    // })
  }

  _addDays(date: Date, days: number) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  _countPrice() {
    let daysDiff = moment(this.selectedDateRange.end).diff(moment(this.selectedDateRange.start), 'days');
    this.price = 0;
    let date = this.selectedDateRange.start as Date;
    for (let i = 0; i < daysDiff; i++) {
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      const currentDate = day + "." + month + "." + year;
      this.price += this.pricePerDay[currentDate] ?? this.defaultPricePerDay;
      date = this._addDays(date, 1);
    }
  }
}
