// import { TEXT_TO_IMAGES_MODELS } from '@renderer/config/models'
import FileManager from '@renderer/services/FileManager'
import { useAppDispatch, useAppSelector } from '@renderer/store'
import { addPainting, removePainting, updatePainting, updatePaintings } from '@renderer/store/paintings'
import { Painting } from '@renderer/types'
import { uuid } from '@renderer/utils'
import { useProviders } from '@renderer/hooks/useProvider'

export function usePaintings() {
  const paintings = useAppSelector((state) => state.paintings.paintings)
  const dispatch = useAppDispatch()
  const generateRandomSeed = () => Math.floor(Math.random() * 1000000).toString()
  const { providers } = useProviders()
  const allModels = providers.map((p) => p.models).flat()
  const modelOptions = allModels.filter(v=>v.type?.includes('vision'))

  return {
    paintings,
    addPainting: () => {
      const newPainting: Painting = {
        model: modelOptions[0]?.id || '',
        id: uuid(),
        urls: [],
        files: [],
        prompt: '',
        negativePrompt: '',
        imageSize: '1024x1024',
        numImages: 1,
        seed: generateRandomSeed(),
        steps: 25,
        guidanceScale: 4.5,
        promptEnhancement: true
      }
      dispatch(addPainting(newPainting))
      return newPainting
    },
    removePainting: async (painting: Painting) => {
      FileManager.deleteFiles(painting.files)
      dispatch(removePainting(painting))
    },
    updatePainting: (painting: Painting) => {
      dispatch(updatePainting(painting))
    },
    updatePaintings: (paintings: Painting[]) => {
      dispatch(updatePaintings(paintings))
    }
  }
}
