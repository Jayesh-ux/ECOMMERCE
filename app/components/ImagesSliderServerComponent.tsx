"use server";
import { gql } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ImagesSlider } from "./ui/images-slider";
import ImagesSliderClientComponent from "./ImagesSliderClientComponent";

const GET_HERO_IMAGES_AND_SECTION = gql`
  query GetHeroImagesAndSection {
    allHeroImage {
      image1 {
        asset {
          url
        }
      }
      image2 {
        asset {
          url
        }
      }
      image3 {
        asset {
          url
        }
      }
    }
    allHerosection {
      heroText
      buttonText
      buttonLink
    }
  }
`;

const sanityUrl = "https://vkl3rm7l.api.sanity.io/v2023-08-01/graphql/production/default";

export default async function ImagesSliderServerComponent() {
  const client = new ApolloClient({
    uri: sanityUrl,
    cache: new InMemoryCache(),
    ssrMode: true,
    defaultOptions: {
      query: {
        fetchPolicy: 'no-cache',
      },
    },
  });

  const timestamp = Date.now().toString();
  const cacheKey = btoa(`${GET_HERO_IMAGES_AND_SECTION.loc.source.body}:${timestamp}`);

  const { data } = await client.query({
    query: GET_HERO_IMAGES_AND_SECTION,
    context: {
      headers: {
        'Cache-Key': cacheKey,
      },
    },
  });

  const heroImages = data.allHeroImage[0];
  const heroSection = data.allHerosection[0];


  const images = [
    heroImages.image1.asset.url,
    heroImages.image2.asset.url,
    heroImages.image3.asset.url,
  ];

  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <ImagesSliderClientComponent heroSection={heroSection} />
    </ImagesSlider>
  );
}