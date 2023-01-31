export interface Videos {
	kind: string;
	etag: string;
	items: Video[];
}

export interface Video {
	kind: string;
	etag: string;
	id: string;
	snippet: {
		publishedAt: string;
		channelId: string;
		title: string;
		description: string;
		thumbnails: {
			default: {
				url: string;
				width: number;
				height: number;
			};
			medium: {
				url: string;
				width: number;
				height: number;
			};
			high: {
				url: string;
				width: number;
				height: number;
			};
			standard: {
				url: string;
				width: number;
				height: number;
			};
			maxres: {
				url: string;
				width: number;
				height: number;
			};
		};
		channelTitle: string;
		tags: string[];
		categoryId: string;
		liveBroadcastContent: string;
		localized: {
			title: string;
			description: string;
		};
		defaultAudioLanguage: string;
	};
	contentDetails: {
		duration: string;
		dimension: string;
		definition: string;
		caption: string;
		licensedContent: boolean;
		contentRating: {};
		projection: string;
	};
}

export interface windowSize {
	width?: number;
	height: number;
}

export interface dataYoutube {
	kind: string;
	etag: string;
	regionCode: string;
	pageInfo: {
		totalResults: number;
		resultsPerPage: number;
	};
	items: [
		{
			kind: string;
			etag: string;
			id: {
				kind: string;
				videoId: string;
			};
			snippet: {
				publishedAt: string;
				channelId: string;
				title: string;
				description: string;
				thumbnails: {
					default: {
						url: string;
						width: number;
						height: number;
					};
					medium: {
						url: string;
						width: number;
						height: number;
					};
					high: {
						url: string;
						width: number;
						height: number;
					};
				};
				channelTitle: string;
				liveBroadcastContent: string;
				publishTime: string;
			};
		}
	];
}

type PickOnly<T, K extends keyof T> =
    Pick<T, K> & { [P in Exclude<keyof T, K>]?: never };

export type lastPosts = PickOnly<Post, 'id' | 'betterFeaturedImage' | 'slug' | 'title' | 'date'>
export type YoutubeId = PickOnly<Post, 'acf' >

export type Inputs = {
	author_name: string;
	author_email: string;
	content: string;
};

export type Mensajes = {
	acf: {
		nombre: string;
		correo: string;
		texto_mensaje: string;
	}
}

export interface Post {
    id:                  number;
    date:                Date;
    dateGmt:             Date;
    guid:                GUID;
    modified:            Date;
    modifiedGmt:         Date;
    slug:                string;
    status:              string;
    type:                string;
    link:                string;
    title:               GUID;
    content:             Content;
    excerpt:             Content;
    author:              number;
    featuredMedia:       number;
    commentStatus:       string;
    pingStatus:          string;
    sticky:              boolean;
    template:            string;
    format:              string;
    meta:                any[];
    categories:          number[];
    tags:                any[];
    betterFeaturedImage: BetterFeaturedImage;
    acf:                 any[];
    links:               Links;
}

export interface BetterFeaturedImage {
    id:           number;
    altText:      string;
    caption:      string;
    description:  string;
    mediaType:    string;
    mediaDetails: MediaDetails;
    post:         number;
    sourceURL:    string;
}

export interface MediaDetails {
    width:     number;
    height:    number;
    file:      string;
    filesize:  number;
    sizes:     Sizes;
    imageMeta: ImageMeta;
}

export interface ImageMeta {
    aperture:         string;
    credit:           string;
    camera:           string;
    caption:          string;
    createdTimestamp: string;
    copyright:        string;
    focalLength:      string;
    iso:              string;
    shutterSpeed:     string;
    title:            string;
    orientation:      string;
    keywords:         any[];
}

export interface Sizes {
    medium:    Medium;
    thumbnail: Medium;
}

export interface Medium {
    file:      string;
    width:     number;
    height:    number;
    mimeType:  string;
    filesize:  number;
    sourceURL: string;
}

export interface Content {
    rendered:  string;
    protected: boolean;
}

export interface GUID {
    rendered: string;
}

export interface Links {
    self:               About[];
    collection:         About[];
    about:              About[];
    author:             Author[];
    replies:            Author[];
    versionHistory:     VersionHistory[];
    predecessorVersion: PredecessorVersion[];
    wpFeaturedmedia:    Author[];
    wpAttachment:       About[];
    wpTerm:             WpTerm[];
    curies:             Cury[];
}

export interface About {
    href: string;
}

export interface Author {
    embeddable: boolean;
    href:       string;
}

export interface Cury {
    name:      string;
    href:      string;
    templated: boolean;
}

export interface PredecessorVersion {
    id:   number;
    href: string;
}

export interface VersionHistory {
    count: number;
    href:  string;
}

export interface WpTerm {
    taxonomy:   string;
    embeddable: boolean;
    href:       string;
}


//Youtube Videos Interface
export interface YoutubeItem {
    kind:       string;
    etag:       string;
    regionCode: string;
    pageInfo:   PageInfo;
    items:      Item[];
}

export interface Item {
    kind:    string;
    etag:    string;
    id:      ID;
    snippet: Snippet;
}

export interface ID {
    kind:    string;
    videoId: string;
}

export interface Snippet {
    publishedAt:          Date;
    channelID:            string;
    title:                string;
    description:          string;
    thumbnails:           Thumbnails;
    channelTitle:         string;
    liveBroadcastContent: string;
    publishTime:          Date;
}

export interface Thumbnails {
    default: Default;
    medium:  Default;
    high:    Default;
}

export interface Default {
    url:    string;
    width:  number;
    height: number;
}

export interface PageInfo {
    totalResults:   number;
    resultsPerPage: number;
}

