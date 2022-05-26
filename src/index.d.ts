export class BaseRequest {
    public constructor(data: BaseRequestData, callback: void);
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

export interface BaseRequestData {
    secret?: string | "Wmfd2893gb7";
    gameVersion?: number | 21;
    binaryVersion?: number | 35;
    gdw?: 0 | 1;
}

export interface LevelSearchRequestData extends BaseRequestData {
    gauntlet?: number;
    type?: LevelSearchType;
    query?: string;
    diff?: LevelDifficultyFilter;
    len?: LevelLengthFilter;
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

export interface DailyLevelRequestData extends BaseRequestData {
    weekly?: boolean;
}

export interface LevelDataRequestData extends BaseRequestData {
    id: number;
}

export interface ProfileRequestData extends BaseRequestData {
    name: string;
}

export type LevelDemonFilter = "EASY" | "MEDIUM" | "HARD" | "INSANE" | "EXTREME";

export type LevelLengthFilter = "TINY" | "SMALL" | "MEDIUM" | "LONG" | "XL";

export type LevelDifficultyFilter = "AUTO" | "DEMON" | "EASY" | "NORMAL" | "HARD" | "HARDER" | "INSANE";

export type LevelSearchType = "MOST_LIKED" | "MOST_DOWNLOADED" | "DEFAULT" | "TRENDING" | "RECENT" | "FEATURED" | "MAGIC" | "AWARDED" | "MOST_LIKED_GDW" | "HALL_OF_FAME" | "FEATURED_GDW";