import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ContactFormState {
  name: string;
  email: string;
  message: string;
  errors: { email?: string; message?: string };
  isSubmitted: boolean;
}

const initialState: ContactFormState = {
  name: '',
  email: '',
  message: '',
  errors: {},
  isSubmitted: false,
};

const contactFormSlice = createSlice({
  name: 'contactForm',
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string | null>) {
      state.name = action.payload;
    },
    setEmail(state, action: PayloadAction<string | null>) {
      state.email = action.payload;
      console.log(state.email)
    },
    setMessage(state, action: PayloadAction<string | null>) {
      state.message = action.payload;
    },
    setErrors(state, action: PayloadAction<{ email?: string | null; message?: string | null }>) {
      state.errors = action.payload;
    },
    setIsSubmitted(state, action: PayloadAction<boolean>) {
      state.isSubmitted = action.payload;
    },
    resetForm(state) {
      state.name = '';
      state.email = '';
      state.message = '';
      state.errors = {};
      state.isSubmitted = true;
    },
  },
});

export const { setName, setEmail, setMessage, setErrors, setIsSubmitted, resetForm } = contactFormSlice.actions;

export default contactFormSlice.reducer;
