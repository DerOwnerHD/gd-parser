export class LevelSearchRequest extends BaseRequest {
    public constructor(data: LevelRequestData, callback: void);
}

export class BaseRequest {
    public constructor(data: BaseRequestData, callback: void);
}

export interface LevelRequestData extends BaseRequestData {
    gauntlet?: number;
    accountID?: number;
    gjp?: string;
    type?: LevelSearchType;
    str?: string;
    diff?: LevelDifficultyFilter;
    len?: LevelLengthFilter;
    filters?: LevelSearchFilters;
}

export type LevelLengthFilter = 0 | 1 | 2 | 3 | 4;
export type LevelDifficultyFilter = -1 | -2 | 1 | 2 | 3 | 4 | 5;

export enum LevelSearchType {
    MOST_LIKED,
    MOST_DOWNLOADED,
    DEFAULT,
    TRENDING,
    RECENT,
    OWN_LEVELS,
    FEATURED,
    MAGIC,
    MODERATOR_SENT,
    MAP_PACK = 10,
    AWARDED = 11,
    FOLLOWED = 12,
    FRIENDS = 13,
    MOST_LIKED_GDW = 15,
    HALL_OF_FAME = 16,
    FEATURED_2 = 17,
    UNKNOWN = 18
}

export interface LevelSearchFilters {
    uncompleted?: 0 | 1;
    onlyCompleted?: 0 | 1;
    featured?: 0 | 1;
    original?: 0 | 1;
    twoPlayer?: 0 | 1;
    coins?: 0 | 1;
    epic?: 0 | 1;
    noStar?: 1;
    star?: 1;
    song?: number;
    customSong?: number;
    completedLevels?: number[];
    followed?: number[];
}

export interface BaseRequestData {
    secret?: string | "Wmfd2893gb7";
    gameVersion?: number | 21;
    binaryVersion?: number | 35;
    gdw?: 0 | 1;
}