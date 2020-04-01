import { getApplicationConfig } from './config'

/**
 * Construct a string that represents the 'Accept' header value for UMM requests
 * @param {string} conceptType The configured version of the UMM concept requested
 */
export const getUmmVersionHeaderPrefix = requestedConceptTypeVersion => (
  `application/vnd.nasa.cmr.umm_results+json; version=${requestedConceptTypeVersion}`
)

/**
 * Returns the full Accept header as a string
 */
// Changed for MAAP
export const getUmmGranuleVersionHeader = () => 'application/json'

/**
 * Returns the full Accept header as a string
 */
export const getUmmCollectionVersionHeader = () => {
  const {
    ummCollectionVersion
  } = getApplicationConfig()

  return getUmmVersionHeaderPrefix(ummCollectionVersion)
}

/**
 * Returns the full Accept header as a string
 */
export const getUmmServiceVersionHeader = () => {
  const {
    ummServiceVersion
  } = getApplicationConfig()

  return getUmmVersionHeaderPrefix(ummServiceVersion)
}

/**
 * Returns the full Accept header as a string
 */
export const getUmmVariableVersionHeader = () => {
  const {
    ummVariableVersion
  } = getApplicationConfig()

  return getUmmVersionHeaderPrefix(ummVariableVersion)
}
