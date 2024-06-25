import './App.css'
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
//import { MuiDatePickers } from './components/MuiDatePickers';
import "dayjs/locale/pt-br";
//import { MuiDateRangePiker } from './components/MuiDateRangePicker';
//import { MuiLoadingButton } from './components/MuiLoadingButton'
//import { MuiSkeleton } from './components/MuiSkeleton'
//import { MuiDialog } from './components/MuiDialog'
//import { MuiProgress } from './components/MuiProgress'
//import { MuiAlert } from './components/MuiAlert'
//import { MuiSnackBar } from './components/MuiSnackBar'
//import { MuiTable } from './components/MuiTable'
//import { MuiChip } from './components/MuiChip'
//import { MuiTooltip } from './components/MuiToolTip'
//import { MuiList } from './components/MuiList'
//import { MuiAvatar } from './components/MuiAvatar'
//import { MuiBadge } from './components/MuiBadge'
//import { MuiBottonNavigation } from './components/MuiBottonNavigation'
//import { MuiBreadcrumbs } from './components/MuiBreadcrumbs';
//import { MuiDrawer } from './components/MuiDrawer';
//import { MuiImageList } from './components/MuiImageList'
//import { MuiCard } from './components/MuiCard'
//import { MuiLayout } from './components/MuiLayout'
//import { MuiAutocomplete } from './components/MuiAutocomplete'
//import { MuiRating } from './components/MuiRating'
//import { MuiSwitch } from './components/MuiSwitch'
//import { MuiCheckBox } from './components/MuiCheckBox'
//import { MuiRadioButton } from './components/MuiRadioButton'
//import { MuitSelect } from './components/MuiSelect'
//import { MuiButton } from './components/MuiButton'
//import { MuiTypography } from './components/Muitypography'
//import { MuiTextField } from './components/MuiTextField';
import { MuiAccordion } from './components/MuiAccordion';
//import { MuiNavbar } from './components/MuiNavbar';
//import { MuiSpeedDial } from './components/MuiSpeedDial';


function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <div>
        {/* <MuiTypography/>*/}
        {/*<MuiButton/>*/}
        {/*<MuiTextField/>*/}
        {/*<MuitSelect/>*/}
        {/*<MuiRadioButton/>*/}
        {/*<MuiCheckBox/>*/}
        {/*<MuiSwitch/>*/}
        {/*<MuiRating/>*/}
        {/*<MuiAutocomplete/>*/}
        {/*<MuiLayout/>*/}
        {/*<MuiCard/>*/}
        <MuiAccordion/>
        {/*<MuiImageList/>*/}
        {/*<MuiNavbar/>*/}
        {/*<MuiBreadcrumbs/>*/}
        {/*<MuiDrawer/>*/}
        {/*<MuiSpeedDial/>*/}
        {/*<MuiBottonNavigation/>*/}
        {/*<MuiAvatar/>*/}
        {/*<MuiBadge/>*/}
        {/*<MuiList/>*/}
        {/*<MuiChip/>*/}
        {/*<MuiTooltip/>*/}
        {/*<MuiTable/>*/}
        {/*<MuiAlert/>*/}
        {/*<MuiSnackBar/>*/}
        {/*<MuiDialog/>*/}
        {/*<MuiProgress/>*/}
        {/* <MuiSkeleton/> */}
        {/* <MuiLoadingButton /> */}
        {/* <DatePicker/> */}
        {/* <MuiDatePickers /> */}
        {/* <MuiDateRangePiker/> */}
      </div>
    </LocalizationProvider>
  );
}

export default App

