//https://www.ebilet.pl/muzyka/festiwale/
export interface Show {
  id: string;
  name: string;
  description: string;
  price: number;
  imageSrc: string;
}

export const FAKE_DESCRIPTION: string =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

export const FAKE_SHOWS: Show[] = [
  {
    id: '23e77d47-1762-42eb-933b-85b5baf3d19d',
    name: 'Kraków Live Festival 2022',
    price: 155,
    description: FAKE_DESCRIPTION,
    imageSrc:
      'https://ebilet-media.azureedge.net/media/47004/klf_2022_basic_ebilet_900x507450.jpg',
  },
  {
    id: 'd071b2e5-bac2-4eb5-aa09-f8fa88c7d060',
    name: 'OFF Festival Katowice 2022',
    price: 60,
    description: FAKE_DESCRIPTION,
    imageSrc: 'https://ebilet-media.azureedge.net/media/46018/3-1450.jpg',
  },
  {
    id: 'beeee3bd-c4e3-455e-9365-690aa769c0f4',
    name: 'Audioriver Festival 2022',
    price: 189,
    description: FAKE_DESCRIPTION,
    imageSrc:
      'https://ebilet-media.azureedge.net/media/46855/audioriver-ogolna-900450.jpg',
  },
  {
    id: 'a6b895d6-ba89-4c0b-9310-476c45ec85d5',
    name: 'Sun Festival 2022: Kołobrzeg / Podczele',
    price: 100,
    description: FAKE_DESCRIPTION,
    imageSrc:
      'https://ebilet-media.azureedge.net/media/44894/900x507-71450.jpg',
  },
  {
    id: '7d206dd0-4f3e-41fc-a457-b5369ce1952c',
    name: 'Summer Dying Loud 2022',
    price: 20,
    description: FAKE_DESCRIPTION,
    imageSrc: 'https://ebilet-media.azureedge.net/media/40288/900x507-1450.jpg',
  },
  {
    id: '826d5cfb-bad6-4168-b231-c34b10692305',
    name: '41. Międzynarodowy Festiwal Piknik Country i Folk Mrągowo 2022',
    price: 99,
    description: FAKE_DESCRIPTION,
    imageSrc:
      'https://ebilet-media.azureedge.net/media/44599/piknik-country-folk-2022-banner-900x507-v3450.jpg',
  },
  {
    id: '748ae143-e1f3-4cac-843d-3700837dba23',
    name: 'Męskie Granie 2022',
    price: 199,
    description: FAKE_DESCRIPTION,
    imageSrc:
      'https://ebilet-media.azureedge.net/media/46292/meskie-granie-900450.jpg',
  },
  {
    id: '42b735ac-fd73-42d7-84ff-86eeccf147e7',
    name: 'Tauron Nowa Muzyka Katowice',
    price: 299,
    description: FAKE_DESCRIPTION,
    imageSrc:
      'https://ebilet-media.azureedge.net/media/46724/tauron-900450.jpg',
  },
  {
    id: '20fd1b5e-09d1-4d2f-9af1-c99229a67788',
    name: 'Szczecin AmfiTunes',
    price: 63,
    description: FAKE_DESCRIPTION,
    imageSrc:
      'https://ebilet-media.azureedge.net/media/45454/amfi900x507450.jpg',
  },
  {
    id: '3f1506a7-445a-49ca-8228-689740fde5a1',
    name: 'Roztańczony PGE Narodowy 2022',
    price: 79,
    description: FAKE_DESCRIPTION,
    imageSrc:
      'https://ebilet-media.azureedge.net/media/47086/roztanczony-ebilet-aktualizacja-12_07-900x507-px450.jpg',
  },
  {
    id: 'd0752b1e-40c4-4721-8730-b5ca6a769117',
    name: 'Rockowizna 2022',
    price: 109,
    description: FAKE_DESCRIPTION,
    imageSrc:
      'https://ebilet-media.azureedge.net/media/46736/rockowizna-900x507px-cmyk1450.jpg',
  },
  {
    id: '5623ee08-8955-4643-82eb-da7e582125d4',
    name: 'Edison Festival 2022',
    price: 79,
    description: FAKE_DESCRIPTION,
    imageSrc: 'https://ebilet-media.azureedge.net/media/45978/900x507-3450.jpg',
  },
  {
    id: '891ddcb9-70db-485b-9983-43facb7248de',
    name: 'Top of the Top Sopot Festival',
    price: 115,
    description: FAKE_DESCRIPTION,
    imageSrc:
      'https://ebilet-media.azureedge.net/media/47104/top-of-the-top-logo450.jpg',
  },
  {
    id: '676add03-58ad-49f9-85a2-68b9522a7ed8',
    name: 'Summer Fall Festival',
    price: 60,
    description: FAKE_DESCRIPTION,
    imageSrc:
      'https://ebilet-media.azureedge.net/media/47012/summerfall-900x507450.jpg',
  },
  {
    id: '8d81a453-38f0-4eaf-ae2b-8ae8b554ea01',
    name: 'VIII Wschód Piękna',
    price: 120,
    description: FAKE_DESCRIPTION,
    imageSrc:
      'https://ebilet-media.azureedge.net/media/46268/900x507-wp22_ebilet-200421450.jpg',
  },
  {
    id: '3ade7f16-fe82-4c48-afed-a73b9f51d7dd',
    name: 'Great September Showcase Festival & Conference',
    price: 129,
    description: FAKE_DESCRIPTION,
    imageSrc:
      'https://ebilet-media.azureedge.net/media/46653/great-september-900450.jpg',
  },
  {
    id: 'd5a67aab-9c18-47fc-97fc-cd12f3cce1cd',
    name: 'Lato w Plenerze 2022',
    price: 70,
    description: FAKE_DESCRIPTION,
    imageSrc:
      'https://ebilet-media.azureedge.net/media/46934/lato-w-plenerze-900450.jpg',
  },
  {
    id: '9c108522-a9ca-426e-b39c-6354f50cb2e5',
    name: 'Festiwal Weselnych Przebojów 2022',
    price: 119,
    description: FAKE_DESCRIPTION,
    imageSrc:
      'https://ebilet-media.azureedge.net/media/46924/22_worldmedia_002_fwp_grafika_900x507px_v1-01-1450.jpg',
  },
  {
    id: '12bd7fc4-05dd-4672-a3a2-08beba7ca64c',
    name: 'wROCK for Freedom - legendy polskiego rocka',
    price: 60,
    description: FAKE_DESCRIPTION,
    imageSrc:
      'https://ebilet-media.azureedge.net/media/46253/legendy-polskiego-rocka450.jpg',
  },
  {
    id: '8c2729d2-c5ff-44fe-930f-693c332404cb',
    name: 'MOTO ROCK Festiwal',
    price: 99,
    description: FAKE_DESCRIPTION,
    imageSrc:
      'https://ebilet-media.azureedge.net/media/47103/motorock_900x507450.jpg',
  },
];
