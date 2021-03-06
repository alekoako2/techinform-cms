import gql from 'graphql-tag'

export const qrjPublicationsQueries = gql`
  query QrjPublications(
    $languageCode: LanguageCode
    $query: QrjPublicationQueryInput
    $first: Int
    $skip: Int
    $orderBy: String
  ) {
    qrjPublications(
      query: $query
      first: $first
      skip: $skip
      orderBy: $orderBy
    ) {
      id
      edited
      index
      translation(language: $languageCode) {
        title
        abstract
      }
    }
    countQrjPublications(query: $query)
  }
`

export const qrjPublicationQuery = gql`
  query QrjPublication($languageCode: LanguageCode, $id: ID) {
    qrjPublication(id: $id) {
      index
      year
      number
      pages
      inputDate
      doiUrl
      qrjJournal {
        code
        translation(language: $languageCode) {
          name
          address
        }
      }
      oecd {
        code
        translation(language: $languageCode) {
          name
        }
      }
      translation {
        id
        title
        publicationAuthor
        publicationLang
        abstract
      }
    }
  }
`
