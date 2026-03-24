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
  loadDataInFormFromTab,
} from './model/tabFormReducer';

export {
  useHandleTabTitleChange,
  useHandleTabSubtitleChange,
  useHandleTabNotesTextChange,
  useHandleTempoChange,
  useHandleSubmitTabForm,
} from './lib/tabFormHandlers';

export { useGetTabFromForm } from './lib/useGetTabFromForm';

export { useGetNewTabFromForm } from './lib/useGetNewTabFromForm';
export { useResetFormOnUnmount } from './lib/useResetFormOnUnmount';
