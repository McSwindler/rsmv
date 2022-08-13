// GENERATED DO NOT EDIT
// This source data is located at '..\src\opcodes\materials.jsonc'
// run `npm run filetypes` to rebuild

export type materials = {
	version: number,
	v0: {
		unk0: number,
		texsize: number,
		unk2: number,
		textureflags: number,
		diffuse: number | null,
		normal: number | null,
		unk3_skybox: Uint8Array,
		flags2: number,
		unkfloat1: number | null,
		unkfloat2: number | null,
		unk7: number,
		weirdshit: Uint8Array | null,
		diffuse_related1: number | null,
		normal_related: Uint8Array | null,
		diffuse_related2: number | null,
		alphamode: number,
		alphacutoff: number | null,
		animtex: number,
		animtexU: number | null,
		animtexV: number | null,
		flagextra: boolean,
		extra: {
			unk00_flags: number,
			unk01_flagsornumber: number,
			unk02: number,
			unknown: Uint8Array,
			unk07_bool: boolean,
			unk08_flags: number,
			unk09_bool: boolean,
			unk0a_bool: boolean,
			specular: number,
			ignoreVertexColors: number,
			colorint: number,
		} | null,
	} | null,
	v1: {
		flags: number,
		opaque_2: number,
		flag3: number,
		hasDiffuse: number,
		hasNormal: number,
		hasCompound: number,
		hasUVanimU: number,
		hasUVanimV: number,
		flag10: number,
		flag11: number,
		flag12: number,
		flag13: number,
		flag14: number,
		flag15: number,
		flag16: number,
		ignore_vertexcol_17: number,
		flag18: number,
		flag19: number,
		flag20: number,
		flag21: number,
		diffuse: {
			size: number,
			texture: number,
		} | null,
		normal: {
			size: number,
			texture: number,
		} | null,
		compound: {
			size: number,
			texture: number,
		} | null,
		flag13value: number | null,
		flag14value: number | null,
		flag15value: number | null,
		flag18value: number | null,
		flag16value: number | null,
		flag12value: number | null,
		flag11value: [
			number,
			number,
			number,
		] | null,
		flag19value: [
			number,
			number,
			number,
			number,
			number,
		] | null,
		normalScale: number | null,
		flag17value: number | null,
		uvanim_u: number | null,
		uvanim_v: number | null,
		always_0x0901: Uint8Array,
		unknownbyte0: number,
		alphamode: number,
		alphacutoff: number | null,
		unkFFFF: Uint8Array,
		endbyte: number,
	} | null,
};
