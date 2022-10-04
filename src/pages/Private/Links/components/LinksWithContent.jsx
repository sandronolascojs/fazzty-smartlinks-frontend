import React from 'react'

// icons
import { FaArrowLeft, FaArrowRight, FaBuffer, FaSearch } from 'react-icons/fa'

// components
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton'
import TrackCard from '@/components/TrackCard/TrackCard'
import { LinksWithContentContainer, LinksWithContentHeader, LinksWithContentLimitContainer, LinksWithContentLimitSelectorWrapper, LinksWithContentLinkPaginationButton, LinksWithContentLinkPaginationLabelResults, LinksWithContentLinkPaginationWrapper, LinksWithContentLinksContainer, LinksWithContentPaginationSpan, LinksWithContentSearchContainer, LinksWithContentSearchIconContainer, LinksWithContentSearchInput } from '../styled-components/LinksWithContent.styles'

function LinksWithContent ({
  links,
  page,
  handleNextPage,
  handlePrevPage,
  paginateData,
  limit,
  setLimit,
  setTrackName
}) {
  const handleLimitChange = (e) => {
    return setLimit(e.target.value)
  }

  const handleSubmitChange = (e) => {
    e.preventDefault()
    return setTrackName(e.target.name.value)
  }

  const handleEmptySearch = (e) => {
    if (e.target.value === '') {
      return setTrackName('')
    }
  }

  const handleDisablePrevButton = () => {
    if (page === 1) {
      return true
    } else {
      return false
    }
  }

  const handleDisableNextButton = () => {
    if (paginateData.totalPages === page) {
      return true
    } else {
      return false
    }
  }

  const showNumberResults = () => {
    if (paginateData.currentPage === paginateData.totalPages) {
      return paginateData.totalResults
    }

    if (paginateData.totalResults > limit) {
      return paginateData.currentPage * limit
    }

    return paginateData.totalResults
  }
  return (
        <>
            <LinksWithContentContainer>
              <LinksWithContentHeader>

                  <form onSubmit={handleSubmitChange}>
                    <LinksWithContentSearchContainer>
                      <LinksWithContentSearchIconContainer>
                        <FaSearch />
                      </LinksWithContentSearchIconContainer>
                      <LinksWithContentSearchInput
                        onChange={handleEmptySearch}
                        type="search"
                        name="name"
                        placeholder="Search song or artist..."
                      />
                    </LinksWithContentSearchContainer>
                  </form>

                <LinksWithContentLimitContainer>

                    <PrimaryButton>
                      <FaBuffer />
                      Create Link
                    </PrimaryButton>

                  <LinksWithContentLimitSelectorWrapper>
                    <label>
                      Limit of results
                    </label>
                    <select
                      onChange={handleLimitChange}
                      id="limit"
                    >
                      <option value="8">8</option>
                      <option value="12">12</option>
                      <option value="18">18</option>
                    </select>
                  </LinksWithContentLimitSelectorWrapper>

                </LinksWithContentLimitContainer>
              </LinksWithContentHeader>
              <LinksWithContentLinksContainer>
                {links.map((link) => (
                  <TrackCard
                    key={link._id}
                    id={link._id}
                    explicit={link.explicit}
                    images={link.images}
                    name={link.name}
                    artists={link.artists.join(', ')}
                    previewUrl={
                      link.previewUrl.spotify ||
                      link.previewUrl.deezer ||
                      link.previewUrl.napster
                    }
                    publicUrl={link.publicUrl}
                  />
                ))}
              </LinksWithContentLinksContainer>

                <LinksWithContentLinkPaginationWrapper>
                  <LinksWithContentLinkPaginationButton disabled={handleDisablePrevButton()} onClick={handlePrevPage}>
                    <FaArrowLeft />
                  </LinksWithContentLinkPaginationButton>
                  <LinksWithContentPaginationSpan>
                    {page} | {paginateData.totalPages}
                  </LinksWithContentPaginationSpan>
                  <LinksWithContentLinkPaginationButton disabled={handleDisableNextButton()} onClick={handleNextPage}>
                    <FaArrowRight />
                  </LinksWithContentLinkPaginationButton>

                </LinksWithContentLinkPaginationWrapper>

                  <LinksWithContentLinkPaginationLabelResults>
                    Showing {paginateData.currentPage * limit - limit + 1} -{' '}
                    {showNumberResults()} of {paginateData.totalResults} results
                  </LinksWithContentLinkPaginationLabelResults>

            </LinksWithContentContainer>
        </>
  )
}

export default LinksWithContent
