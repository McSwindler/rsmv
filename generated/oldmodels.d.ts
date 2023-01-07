// GENERATED DO NOT EDIT
// This source data is located at '..\src\opcodes\oldmodels.jsonc'
// run `npm run filetypes` to rebuild

export type oldmodels = {
	colanimcount: number,
	unkcount0: number,
	unkcount1: number,
	unkcount2: number,
	xsize: number,
	ysize: number,
	zsize: number,
	flag1: boolean,
	flag2: boolean,
	flag3: boolean,
	flag4: boolean,
	byte1: number,
	byte2: number,
	byte3: number,
	byte4: number,
	facecount: number,
	vertcount: number,
	header1: number,
	header2: number,
	modelversion: number,
	textrianglelen: number,
	textriangles: Uint8Array,
	vertflags: Uint8Array,
	tritype: Uint8Array,
	face2: Uint8Array | null,
	boneids: Uint8Array | null,
	alpha: Uint8Array | null,
	tridata: Uint8Array,
	faceunk: Uint8Array | null,
	unk2: Uint8Array,
	material: Uint16Array,
	uvs: Uint8Array,
	colors: Uint16Array | null,
	posx: Uint8Array,
	posy: Uint8Array,
	posz: Uint8Array,
	unk3: Uint8Array,
	particles: {
		texture: number,
		faceid: number,
	}[] | null,
	effectors: {
		effector: number,
		vertex: number,
	}[] | null,
	billboards: {
		unk1: number,
		unk2: number,
		unk3: number,
		unk4: number,
	}[] | null,
	texuvs: {
		headoffset: number,
		indexsize: number,
		datasize: number,
		coordcount: number,
		skipped: Uint8Array,
		offsets: Uint8Array,
		uvdata: Uint8Array,
	} | null,
};
