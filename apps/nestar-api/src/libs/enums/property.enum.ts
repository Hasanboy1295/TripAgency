import { registerEnumType } from '@nestjs/graphql';

export enum PropertyType {
	APARTMENT = 'APARTMENT',
	VILLA = 'VILLA',
	HOUSE = 'HOUSE',

	BATCH = 'BATCH',
	LUXURY = 'LUXURY',
	CITY = 'CITY',
}
registerEnumType(PropertyType, {
	name: 'PropertyType',
});

export enum PropertyStatus {
	ACTIVE = 'ACTIVE',
	SOLD = 'SOLD',
	DELETE = 'DELETE',
}
registerEnumType(PropertyStatus, {
	name: 'PropertyStatus',
});

export enum PropertyLocation {
	SEOUL = 'SEOUL',
	BUSAN = 'BUSAN',
	INCHEON = 'INCHEON',
	DAEGU = 'DAEGU',
	GYEONGJU = 'GYEONGJU',
	GWANGJU = 'GWANGJU',
	CHONJU = 'CHONJU',
	DAEJON = 'DAEJON',
	JEJU = 'JEJU',

    TURKEY = 'TURKEY',
	BALI = 'BALI',
	BANGKOK = 'BANGKOK',
	KOREA = 'KOREA',
	SINGAPORE = 'SINGAPORE',
	ITALY = 'ITALY',
	GERMANY = 'GERMANY',
	UBEKISTAN = 'UBEKISTAN',
	PARIS = 'PARIS',
	TOKYO = 'TOKYO',
	DUBAI = 'DUBAI',
}
registerEnumType(PropertyLocation, {
	name: 'PropertyLocation',
});
