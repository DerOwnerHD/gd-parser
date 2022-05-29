declare class BaseRequest {
    constructor(data: BaseRequestData, callback: void);
}

export class LevelSearchRequest extends BaseRequest {
    public constructor(data: LevelSearchRequestData, callback: void);
}

export class DailyLevelRequest extends BaseRequest {
    public constructor(data: DailyLevelRequestData, callback: void);
}

export class LevelDataRequest extends BaseRequest {
    public constructor(data: LevelDataRequestData, callback: void);
}

export class ProfileRequest extends BaseRequest {
    public constructor(data: ProfileRequestData, callback: void);
}

export class CommentsRequest extends BaseRequest {
    public constructor(data: CommentsRequestData, callback: void);
}

export class CredentialsRequest extends BaseRequest {
    public constructor(data: CredentialsRequestData, callback: void);
}

export class GauntletsRequest extends BaseRequest {
    public constructor(data: GauntletsRequestData, callback: void);
}

export class GauntletDataRequest extends BaseRequest {
    public constructor(data: GauntletDataRequestData, callback: void);
}

export class MapPacksRequest extends BaseRequest {
    public constructor(data: MapPacksRequestData, callback: void);
}

export class CommentHistoryRequest extends BaseRequest {
    public constructor(data: CommentHistoryRequestData, callback: void);
}

export class LeaderboardRequest extends BaseRequest {
    public constructor(data: LeaderboardRequestData, callback: void);
}

export class LevelLeaderboardRequest extends BaseRequest {
    public constructor(data: LevelLeaderboardRequestData, callback: void);
}

export class ProfilePostsRequest extends BaseRequest {
    public constructor(data: ProfilePostsRequestData, callback: void);
}

declare interface BaseRequestData {
    secret?: string;
    gameVersion?: number;
    binaryVersion?: number;
    gdw?: 0 | 1;
}

declare interface LevelSearchRequestData extends BaseRequestData {
    type?: LevelSearchType;
    query?: string;
    difficulty?: LevelDifficultyFilter;
    length?: LevelLengthFilter;
    demonFilter: LevelDemonFilter;
    featured?: boolean;
    original?: boolean;
    twoPlayer?: boolean;
    coins?: boolean;
    epic?: boolean;
    noStar?: boolean;
    star?: boolean;
    song?: number;
    customSong?: number;
    page?: number;
}

declare interface DailyLevelRequestData extends BaseRequestData {
    weekly?: boolean;
}

declare interface LevelDataRequestData extends BaseRequestData {
    id: number;
}

declare interface ProfileRequestData extends BaseRequestData {
    name: string;
}

declare interface CommentsRequestData extends BaseRequestData {
    id: number;
    page?: number;
    recent?: boolean;
}

declare interface CredentialsRequestData extends BaseRequestData {
    name: string;
    password: string;
}

declare interface GauntletsRequestData extends BaseRequestData {
    special?: boolean;
}

declare interface GauntletDataRequestData extends BaseRequestData {
    gauntlet: number;
}

declare interface MapPacksRequestData extends BaseRequestData {
    page?: number;
}

declare interface CommentHistoryRequestData extends BaseRequestData {
    name: string;
    page?: number;
    recent?: boolean;
    id?: number;
}

declare interface LeaderboardRequestData extends BaseRequestData {
    type?: LeaderboardType;
    count?: number;
}

declare interface LevelLeaderboardRequestData extends BaseRequestData {
    name: string;
    password: string;
    id: number;
    type?: LevelLeaderboardType;
}

declare interface ProfilePostsRequestData extends BaseRequestData {
    name: string;
    page?: number;
}

declare type LevelDemonFilter = "EASY" | "MEDIUM" | "HARD" | "INSANE" | "EXTREME";

declare type LevelLengthFilter = "TINY" | "SMALL" | "MEDIUM" | "LONG" | "XL";

declare type LevelDifficultyFilter = "AUTO" | "DEMON" | "EASY" | "NORMAL" | "HARD" | "HARDER" | "INSANE";

declare type LevelSearchType = "MOST_LIKED" | "MOST_DOWNLOADED" | "DEFAULT" | "TRENDING" | "RECENT" | "FEATURED" | "MAGIC" | "AWARDED" | "MAP_PACK" | "MOST_LIKED_GDW" | "HALL_OF_FAME" | "FEATURED_GDW";

declare type LeaderboardType = "STARS" | "CREATORS";

declare type LevelLeaderboardType = "TOP" | "WEEK";