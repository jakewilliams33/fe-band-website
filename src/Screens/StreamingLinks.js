import React from "react";

export const StreamingLinks = () => {
  return (
    <>
      <div style={{ paddingBottom: "300px" }}>
        <div style={{ marginTop: "50px" }} className="linkContainer">
          <ul>
            <li>
              <a
                target="blank"
                href="https://open.spotify.com/artist/1lT3vDbjqz299SxePec6ZG?si=2ptK9ZasTMqiEsrhks_fMA"
              >
                <img
                  data-test="music-service-item-image"
                  src="https://services.linkfire.com/logo_spotify_onlight.svg"
                  alt="Spotify"
                ></img>
              </a>
            </li>
            <li>
              <a
                target="blank"
                href="https://music.apple.com/us/artist/adult-dvd/1550456447"
              >
                <img
                  data-test="music-service-item-image"
                  src="https://services.linkfire.com/logo_applemusic_onlight.svg"
                  alt="Apple Music"
                ></img>
              </a>
            </li>
            <li>
              <a
                target="blank"
                href="https://adultdvd.bandcamp.com/?from=search&search_item_id=3458032651&search_item_type=b&search_match_part=%3F&search_page_id=2552049260&search_page_no=1&search_rank=1&search_sig=522b1de8bbb4315624551e209b71a28a"
              >
                <img
                  data-test="music-service-item-image"
                  src="https://services.linkfire.com/logo_bandcamp_onlight.svg"
                  alt="bandcamp"
                ></img>
              </a>
            </li>
            <li>
              <a
                target="blank"
                href="https://music.youtube.com/channel/UCmGiw0z6dRClNlIFMCnS8Zw?feature=share"
              >
                <img
                  data-test="music-service-item-image"
                  src="https://services.linkfire.com/logo_youtube_onlight.svg"
                  alt="youtube"
                ></img>
              </a>
            </li>
            <li>
              <a target="blank" href="https://tidal.com/browse/artist/23201828">
                <img
                  data-test="music-service-item-image"
                  src="https://services.linkfire.com/logo_tidal_onlight.svg"
                  alt="tidal"
                ></img>
              </a>
            </li>
            <li>
              <a
                target="blank"
                href="https://music.amazon.co.uk/artists/B08TV78J8F/adult-dvd?marketplaceId=A1F83G8C2ARO7P&musicTerritory=GB&ref=dm_sh_y6L9rncT16xJ3RVHqAy0JCheJ"
              >
                <img
                  data-test="music-service-item-image"
                  src="https://services.linkfire.com/logo_amazonmusic_onlight.svg"
                  alt="amazon"
                ></img>
              </a>
            </li>
            <li>
              <a
                target="blank"
                href="https://deezer.page.link/YWRRsndL5gMqWiQW7"
              >
                <img
                  data-test="music-service-item-image"
                  src="https://services.linkfire.com/logo_deezer_onlight.svg"
                  alt="deezer"
                ></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
