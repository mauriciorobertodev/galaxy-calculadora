import { AUTHORITIES, GALAY_ITEMS, STARS } from "./constants";
import { Authority, AuthorityID, GalaxyItem, GalaxyItemID } from "./types";

export function getAuthotiryByID(id: AuthorityID): Authority {
    const authorities = Object.keys(AUTHORITIES);
    const authorityID = authorities.find((authorityID) => authorityID === id) as AuthorityID;
    return AUTHORITIES[authorityID];
}

export function getGalaItemByID(id: GalaxyItemID): GalaxyItem {
    return GALAY_ITEMS[id];
}

export function getAuthotiryByPoints(points: number): Authority {
    const authorities = Object.values(AUTHORITIES);
    const moreAuthorityPoints = authorities[authorities.length - 1] as Authority;
    const fewerAuthorityPoints = authorities[0] as Authority;

    if (points >= moreAuthorityPoints.points) return moreAuthorityPoints;
    if (points <= fewerAuthorityPoints.points) return fewerAuthorityPoints;

    return authorities.find((authority, index) => authority.points <= points && authorities[index + 1].points > points) as Authority;
}

export function getAuthorityById(id: AuthorityID): Authority {
    if (id === "none") return { id: "none", name: "", aura: "", points: 0 };
    return AUTHORITIES[id];
}

export function authorityInStars(points: number): string[] {
    const imgs: string[] = [];
    const stars = Object.values(STARS).reverse();

    stars.forEach((star) => {
        const item = GALAY_ITEMS[star.gala_item_id];

        if (star.points <= points) {
            const times = Math.floor(points / star.points);
            points = points - times * star.points;

            for (let index = 0; index < times; index++) {
                imgs.push(item.img);
            }
        }
    });

    return imgs;
}
