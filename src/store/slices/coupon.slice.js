import { createSlice } from '@reduxjs/toolkit';
import {branchCode, colors, multiplier} from "../../configs/config";
import {getDateDifference} from "../../utils/date";

export const couponSlice = createSlice({
  name: 'coupon',
  initialState: {
    matches: [],
    selectedMultiplier: multiplier.start
  },
  reducers: {
    updateMatchInCoupon: (state, action) => {
      const {eid, sid, en, mb, edgn, edh, iskbet, live} = action.payload.match
      const Coupon = {
        eventId: eid,
        matchId : sid,
        matchBranch : branchCode[sid],
        matchMbsValue : mb,
        matchMbsColor : colors[mb],
        matchName: en,
        matchFullDate: edgn,
        matchDate : getDateDifference(edgn),
        matchHour : edh,
        matchMuk : action.payload.muk,
        matchBet : action.payload.bet,
        iskbet: iskbet,
        live: live
      }

      const CouponIndex = state.matches.findIndex(item => item.eventId === Coupon.eventId)
      if (CouponIndex !== -1) {
        if (state.matches[CouponIndex].matchBet !== Coupon.matchBet) {
          state.matches[CouponIndex].matchBet = Coupon.matchBet
        } else {
          state.matches.splice(CouponIndex, 1)
        }
      } else {
        state.matches.push(Coupon)
      }
    },
    deleteMatchInCoupon: (state, action) => {
      const matchIndex = state.matches.findIndex(match => match.matchId === action.payload);
      if (matchIndex !== -1) {
        state.matches.splice(matchIndex, 1);
      }
    },
    updateSelectedMultiplier: (state, action) => {
      state.selectedMultiplier = action.payload;
    },
    resetAllMatchInCoupon: (state) => {
      state.matches = []
      state.selectedMultiplier = multiplier.start
    }
  },
});

export const { updateMatchInCoupon,
  deleteMatchInCoupon,
  updateSelectedMultiplier,
  resetAllMatchInCoupon
} = couponSlice.actions;

export default couponSlice.reducer;
