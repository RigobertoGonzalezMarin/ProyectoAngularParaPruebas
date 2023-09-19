import { Observable } from "rxjs";

/**
 * @description
 * Interface para el servicio de Herores
 */
export interface HeroesService {
    isNotAvailableAlias: (alias: string) => Observable<boolean>;
}