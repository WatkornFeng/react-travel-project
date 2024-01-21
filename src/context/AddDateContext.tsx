import { addDays } from "date-fns";
import { createContext, useContext, useReducer, useState } from "react";
import { DateRange } from "react-day-picker";

export interface AddDateContextType {
  selectedDay: DateRange | undefined;
  setSelectedDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
  disabledDay: DateRange;
  defaultSelected: DateRange;
}
const AddDateContext = createContext<AddDateContextType | null>(null);

export function DateProvider({ children }: { children: React.ReactNode }) {
  const { Provider } = AddDateContext;
  const currentday = new Date();
  const yesterday = new Date(currentday.getTime() - 24 * 60 * 60 * 1000);
  const defaultSelected: DateRange = {
    from: currentday,
    to: addDays(currentday, 1),
  };
  const disabledDay: DateRange = {
    from: yesterday,
    to: new Date(0),
  };
  const [selectedDay, setSelectedDate] = useState<DateRange | undefined>(
    defaultSelected
  );

  return (
    <Provider
      value={{ selectedDay, setSelectedDate, disabledDay, defaultSelected }}
    >
      {children}
    </Provider>
  );
}

export function useAddDate() {
  const context = useContext(AddDateContext);
  if (context === undefined)
    throw new Error("context was used outside provider");
  return context;
}
