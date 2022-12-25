import { Stack } from '@chakra-ui/react'
import { Page } from '../../Layouts/Page'
import { useWordsResults } from './useWordsResults'
import { Grid } from './Components/Grid'
import {
  CompareButton,
  ResetButton,
  ShowAndHideAnswersButton,
} from './Components/Buttons'
import Inputs from './Components/Inputs'

export const WordsResults = () => {
  const {
    compare,
    updateWordClosure,
    wordsData,
    resetApp,
    answersButtonText,
    toggleShowAnswers,
  } = useWordsResults()
  return (
    <>
      <Page title='Ingrese las palabras en el orden original'>
        <form onSubmit={compare}>
          <Grid>
            <Inputs
              onChangeClosure={updateWordClosure}
              wordsArray={wordsData}
            />
          </Grid>
          <Stack>
            <CompareButton />
            <ShowAndHideAnswersButton
              {...{ answersButtonText, toggleShowAnswers }}
            />
          </Stack>
        </form>
      </Page>
      <Stack marginTop='10em' width={'80%'}>
        <ResetButton {...{ resetApp }} />
      </Stack>
    </>
  )
}
