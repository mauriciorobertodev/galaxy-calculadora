import { AUTHORITIES, STARS } from "./constants";
import { Authority, AuthorityID } from "./types";

export function getAuthotiryByID(id: AuthorityID): Authority {
    return AUTHORITIES.find((a) => a.id === id) as Authority;
}

export function getAuthotiryByPoints(points: number): Authority {
    const lastAuthority = AUTHORITIES[AUTHORITIES.length - 1];
    if (points >= lastAuthority.points) return lastAuthority;
    if (points <= AUTHORITIES[0].points) return AUTHORITIES[0];

    return AUTHORITIES.find((a, index) => a.points <= points && AUTHORITIES[index + 1].points > points) as Authority;
}

export function authorityInStars(points: number): string[] {
    const imgs: string[] = [];

    for (let i = STARS.length - 1; i >= 0; i--) {
        const authStar = STARS[i];
        if (authStar.points <= points) {
            const times = Math.floor(points / authStar.points);
            points = points - times * authStar.points;

            for (let index = 0; index < times; index++) {
                imgs.push(authStar.img);
            }
        }
    }

    return imgs;
}
