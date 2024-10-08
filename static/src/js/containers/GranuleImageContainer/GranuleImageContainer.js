import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import getFocusedGranuleObject from '../../util/focusedGranule'

import GranuleImage from '../../components/GranuleImage/GranuleImage'
import { getFocusedCollectionObject } from '../../util/focusedCollection'

const mapStateToProps = state => ({
  collections: state.metadata.collections,
  focusedCollection: state.focusedCollection,
  focusedGranule: state.focusedGranule
})

export const GranuleImageContainer = ({
  collections,
  focusedCollection,
  focusedGranule
}) => {
  const collection = getFocusedCollectionObject(focusedCollection, collections)
  const { granules } = collection
  const focusedGranuleResult = getFocusedGranuleObject(focusedGranule, granules)

  let imageSrc = ''

  if (focusedGranuleResult && focusedGranuleResult.browse_flag) {
    imageSrc = focusedGranuleResult.thumbnail
  }

  return (
    <GranuleImage imageSrc={imageSrc} />
  )
}

GranuleImageContainer.propTypes = {
  collections: PropTypes.shape({}).isRequired,
  focusedCollection: PropTypes.string.isRequired,
  focusedGranule: PropTypes.string.isRequired
}

export default connect(mapStateToProps, null)(GranuleImageContainer)
