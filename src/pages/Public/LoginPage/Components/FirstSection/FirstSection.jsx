import React from 'react'

// styles
import {
  FirstSectionImg,
  FirstSectionLogoInformation,
  FirstSectionLogoWrapper,
  FirstSectionPLogo,
  FirstSectionPText,
  FirstSectionSvg
} from './FirstSection.styles'

export default function FirstSection () {
  return (
    <>
      <FirstSectionImg src="images/background-shapes.png" />
      <FirstSectionLogoInformation>
        <FirstSectionLogoWrapper>
          <FirstSectionSvg viewBox="0 0 512 512">
            <g>
              <path d="M366.56,234.0073a12.7668,12.7668,0,0,0-11.753-7.5747H296.9443L331.3965,94.6015a14.0681,14.0681,0,0,0-24.1944-12.8252L147.4844,264.1606a12.905,12.905,0,0,0,9.709,21.4067h57.8623L180.6035,417.3984a13.8446,13.8446,0,0,0,7.0225,15.9868,14.2368,14.2368,0,0,0,6.68,1.6924,13.8939,13.8939,0,0,0,10.4922-4.854L364.5156,247.8393A12.7656,12.7656,0,0,0,366.56,234.0073Z" />
            </g>
          </FirstSectionSvg>
          <FirstSectionPLogo>Fazzty</FirstSectionPLogo>
        </FirstSectionLogoWrapper>
        <FirstSectionPText>
          Making Smart Links never was that easy!
        </FirstSectionPText>
      </FirstSectionLogoInformation>
    </>
  )
}
