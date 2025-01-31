export const CLASSNAMES = {
  POPUP:
    'fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-1000',
  center: {
    TITLE:
      'font-gilroy weight-normal font-bold text-3xl sm: text-3xl md:text-4xl lg-5xl uppercase',
    CLOSE_BUTTON: 'hidden',
    POPUP_CONTENT: 'flex justify-center pt-16',
    PANEL: 'flex justify-center pt-20 sm:px-14 md:px-28 lg:px-28',
    WINDOW:
      'border-2 border-red-500 bg-black right-0 top-50 h-[700px] sm:w-full md:w-2/3 lg:w-2/3 z-1000',
  },
  right: {
    POPUP_CONTENT: 'flex items-center h-full',
    PANEL:
      'flex justify-between pt-10 pb-border-line px-14 sm:px-14 md:px-28 lg:px-28',
    TITLE:
      'w-21 h-7 self-end font-gilroy weight-normal text-xl sm:text-xl md:text-2xl lg-2xl uppercase',
    CLOSE_BUTTON: 'text-3xl self-start',
    WINDOW:
      'w-full bg-[rgb(16,16,16)] border-[1px] border-red-400 absolute right-0 top-0 h-full sm:w-full md:w-2/3 lg:w-5/12 z-1000',
  },
  left: {
    POPUP_CONTENT: 'flex items-center h-full',
    PANEL:
      'flex justify-between pt-10 pb-border-line px-14 sm:px-14 md:px-28 lg:px-28',
    TITLE:
      'w-21 h-7 self-end font-gilroy weight-normal text-xl sm: text-xl md:text-2xl lg-2xl uppercase',
    CLOSE_BUTTON: 'text-3xl self-start',
    WINDOW:
      'w-full bg-black border-2 absolute left-0 top-0 h-full sm:w-full md:w-2/3 lg:w-5/12 z-1000',
  },
}
