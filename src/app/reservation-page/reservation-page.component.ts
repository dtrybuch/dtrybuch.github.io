
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateRange, DefaultMatCalendarRangeStrategy, MAT_DATE_RANGE_SELECTION_STRATEGY } from '@angular/material/datepicker';

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

  selectedDateRange!: DateRange<Date>;

  calendarMaxDate: Date = new Date(8640000000000000);

  reservedDates: Date[] = [new Date(2024, 10, 24), new Date(2024, 10, 22)].sort((a,b) => a.getTime() - b.getTime());
  
  tmpReservedDates: Date[] = this.reservedDates;

  maxDate = this.calendarMaxDate;

  minDate = new Date();

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

  addDays(date: Date, days: number) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
}
