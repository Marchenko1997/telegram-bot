import {
  Alarm,
  Balance,
  Book,
  Recognize,
  Scales,
  Uhr,
} from 'public/assets/svg/responsegambl/Icons';

export const gamblingTips = [
  {
    icon: Balance,
    text: (
      <>
        Balance gambling with other <br className="block lg:hidden" /> hobbies: Make sure to engage
        in <br className="block lg:hidden" /> a variety of recreational{' '}
        <br className="block lg:hidden" /> activities so that gambling{' '}
        <br className="block lg:hidden" /> remains just one of many{' '}
        <br className="block lg:hidden" />
        enjoyable pastimes, not the <br className="block lg:hidden" /> main one.
      </>
    ),
  },
  {
    icon: Book,
    text: (
      <>
        Set a clear plan before gambling:
        Decide in advance how much money and time you're willing to spend during each gambling
        session — and stick to it.
      </>
    ),
  },
  {
    icon: Scales,
    text: (
      <>
        Only gamble with what you can afford to lose:
        Never use money meant for essential expenses such as rent, bills, or groceries for gambling.
      </>
    ),
  },
  {
    icon: Uhr,
    text: (
      <>
        Know the odds and accept the risks:
        Take time to understand how gambling works, including the chances of winning and losing, so
        you can make informed decisions.
      </>
    ),
  },
  {
    icon: Recognize,
    text: (
      <>
        Recognize when it stops being fun:
        If gambling starts to feel stressful, compulsive, or negatively affects your well-being,
        it's time to take a break or seek support.
      </>
    ),
  },
  {
    icon: Alarm,
    text: (
      <>
        Use tools to stay in control:
        Set personal limits on losses, time, and wagers to help you maintain control over your
        gambling behavior.
      </>
    ),
  },
];
