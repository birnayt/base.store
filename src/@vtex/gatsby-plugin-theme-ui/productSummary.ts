import { SxStyleProp } from '@vtex/store-ui'

const productSummary: SxStyleProp = {
  container: {
    maxWidth: '300px',
    minWidth: '150px',
    textDecoration: 'none',
    color: 'text',
    flexGrow: 1,
  },

  title: {
    fontWeight: 400,
    fontSize: '14px',
    height: '75px',
    color: '#071923',
    marginTop: '1rem',
  },

  image: {
    width: '100%',
  },
}

export default { productSummary: { default: productSummary } }
