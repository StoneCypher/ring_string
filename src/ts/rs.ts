
const a_low     = 97,
      a_up      = 65,

      z_low     = 122,
      z_up      = 90,

      one       = 49,
      nine      = 57,
      zero      = 48,

      ring_a    = 0x24d0,
      ring_up_a = 0x24b6,
      ring_one  = 0x2460,
      ring_zero = 0x24ea; // of _course_ ring 0 isn't before 1 in unicode, why would anything make sense

const trans_range = (chr: number, lo: number, hi: number, shift: number): number =>
  ((chr >= lo) && (chr <= hi))
    ? ((chr - lo) + shift)
    : chr;

const trans_a_lo = (chr: number): number => trans_range(chr, a_low, z_low, ring_a),
      trans_a_up = (chr: number): number => trans_range(chr, a_up,  z_up,  ring_up_a),
      trans_num  = (chr: number): number => trans_range(chr, one,   nine,  ring_one),
      trans_zero = (chr: number): number => trans_range(chr, zero,  zero,  ring_zero);





// documentary, unused except as exports

const ranges = {
  lower_case : [ a_low, z_low, ring_a    ],
  upper_case : [ a_up,  z_up,  ring_up_a ],
  numeric    : [ one,   nine,  ring_one  ],
  zero       : [ zero,  zero,  ring_zero ]
};

const transforms = {
  trans_a_lo,
  trans_a_up,
  trans_num,
  trans_zero
};





function to_rings(str: string): string {

  return str

    .split('')

    .map( (char: string): string =>

      String.fromCharCode(
        trans_a_lo(
        trans_a_up(
        trans_num(
        trans_zero(
          char.charCodeAt(0)
        ))))
      )

    )

    .join('');

}





export {

  to_rings,

  ranges,
    trans_range,

  transforms,
    trans_a_lo,
    trans_a_up,
    trans_num,
    trans_zero

};
