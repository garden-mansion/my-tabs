export { tabFormReducer } from './model/tabFormReducer';

export {
  setTabTitle,
  setTabSubtitle,
  setTabNotesText,
  setIsTabTitleError,
  setIsTabNotesTextError,
  setTempo,
  setWasSave,
  setTabTitleHelperText,
  setTabNotesTextHelperText,
  resetForm,
} from './model/tabFormReducer';

export {
  useHandleTabTitleChange,
  useHandleTabSubtitleChange,
  useHandleTabNotesTextChange,
  useHandleTempoChange,
  useHandleSubmitTabForm,
} from './lib/tabFormHandlers';

export { useGetNewTabFromForm } from './lib/useGetNewTabFromForm';
export { useResetFormOnUnmount } from './lib/useResetFormOnUnmount';
