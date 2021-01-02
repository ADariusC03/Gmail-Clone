import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    sendMessageIsOpen: false,
  },
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
   
  },
});

export const { openSendMessage, closeSendMessage } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;


// changed everything with counter to mail
//  Redux is a data layer
// sendMessageIsOpen is by default false, (state) => data layer
// in App.js => {sendMessageIsOpen renders <SendMail />} using a selector from the mailSlice
/* in Sidebar.js => in order to dispatch the Compose message. we use the method useDispatch as 
  the dispatch const along with openSendMeesage().. doesn't have to pass in no argument.
It is usable with the onClick function to open the <SendMail /> from the compose button
Remember the sendMessageIsOpen is false by default so its not open automatically.*/