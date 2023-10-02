import React, { useContext } from 'react';
import { TranslationService } from "./TranslationService";
import { TextToSpeechService } from './TextToSpeechService';
import { DevTranslationService } from "./DevTranslationService";
import { DevTextToSpeechService } from './DevTextToSpeechService';

const translationServiceInstance = /*(!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? new DevTranslationService() :*/ new TranslationService();
const textToSpeechServiceInstance = /*(!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? new DevTextToSpeechService() :*/ new TextToSpeechService();

const TranslationServiceContext = React.createContext(translationServiceInstance);
const TextToSpeechServiceContext = React.createContext(textToSpeechServiceInstance);

// Convenience hook
export function useTranslationService() { return useContext(TranslationServiceContext); }
export function useTextToSpeechService() { return useContext(TextToSpeechServiceContext); }

export function TranslationServiceProvider(props: any) {
  return (
    <TranslationServiceContext.Provider value={translationServiceInstance} {...props}>
      <TextToSpeechServiceContext.Provider value={textToSpeechServiceInstance} {...props} />
    </TranslationServiceContext.Provider>
  );
}