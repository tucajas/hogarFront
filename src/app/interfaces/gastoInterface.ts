export interface Gasto {
    id:               number;
    fechaVencimiento: Date;
    fechaPago:        Date;
    importePagar:     number;
    importePagado:    number;
    cantidadCuotas:   number;
    impuesto:         number;
}
