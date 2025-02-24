export interface ILastPeriod {
  startedAt: string;
}

export interface ICurrentCycle {
  isMenstrualCycleRegular: boolean;
  menstrualCycleDuration: number;
}

export interface IMenstrualPeriod {
  id: number;
  startedAt: string;
  lastDate: string;
  userId: number;
  dates: [
    {
      id: number;
      date: string;
      menstrualPeriodId: number;
    }
  ];
}

export interface ICalendarDateInfo {
  dateString: string;
  day: number;
  month: number;
  timestamp: number;
  year: number;
}

export interface ICreateMenstrualPeriodDateResponse {
  date: string;
  menstrualPeriodId: number;
  id: number;
}
