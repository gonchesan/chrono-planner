import React from 'react';
import Button from '@/components/ui/Button';

const EmptyState: React.FC<{ openCreateModal: () => void }> = ({ openCreateModal }) => {
  return (
    <article className="text-center flex flex-col items-center bg-white max-w-fit mx-auto px-6 py-1 rounded-xl shadow-md absolute left-1/2 transform -translate-x-1/2 top-36 md:top-20 md:translate-y-1/2">
      <svg width="250" height="180" viewBox="0 0 250 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="250" height="200" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M63 134H154C154.515 134 155.017 133.944 155.5 133.839C155.983 133.944 156.485 134 157 134H209C212.866 134 216 130.866 216 127C216 123.134 212.866 120 209 120H203C199.134 120 196 116.866 196 113C196 109.134 199.134 106 203 106H222C225.866 106 229 102.866 229 99C229 95.134 225.866 92 222 92H200C203.866 92 207 88.866 207 85C207 81.134 203.866 78 200 78H136C139.866 78 143 74.866 143 71C143 67.134 139.866 64 136 64H79C75.134 64 72 67.134 72 71C72 74.866 75.134 78 79 78H39C35.134 78 32 81.134 32 85C32 88.866 35.134 92 39 92H64C67.866 92 71 95.134 71 99C71 102.866 67.866 106 64 106H24C20.134 106 17 109.134 17 113C17 116.866 20.134 120 24 120H63C59.134 120 56 123.134 56 127C56 130.866 59.134 134 63 134ZM226 134C229.866 134 233 130.866 233 127C233 123.134 229.866 120 226 120C222.134 120 219 123.134 219 127C219 130.866 222.134 134 226 134Z"
          fill="#F3F7FF"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M92 140C79.8497 140 70 130.374 70 118.5C70 106.626 79.8497 97 92 97C92.5167 97 93.0292 97.0174 93.537 97.0517C93.1842 95.0878 93 93.0654 93 91C93 72.2223 108.222 57 127 57C141.991 57 154.716 66.702 159.239 80.1695C160.31 80.0575 161.398 80 162.5 80C179.345 80 193 93.4315 193 110C193 125.741 180.675 138.727 165 139.978V140H108.508H92ZM103.996 140H97.0314H103.996Z"
          fill="white"
        />
        <path
          d="M103.996 140H97.0314M92 140C79.8497 140 70 130.374 70 118.5C70 106.626 79.8497 97 92 97C92.5167 97 93.0292 97.0174 93.537 97.0517C93.1842 95.0878 93 93.0654 93 91C93 72.2223 108.222 57 127 57C141.991 57 154.716 66.702 159.239 80.1695C160.31 80.0575 161.398 80 162.5 80C179.345 80 193 93.4315 193 110C193 125.741 180.675 138.727 165 139.978V140H108.508H92Z"
          stroke="#1F64E7"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M116.612 64.3426C116.612 96.5657 145.633 123.118 183 126.703C178.317 132.461 171.086 136.368 162.847 136.981V137H95.7431C87.6013 137 74 133.57 74 118.548C74 103.527 84.5742 100.097 95.7431 100.097C96.218 100.097 96.6891 100.112 97.1559 100.141C96.8316 98.4556 96.7746 96.7184 96.6623 94.9474C95.9038 82.9842 101.123 67.907 116.63 63C116.618 63.4473 116.612 63.8944 116.612 64.3426ZM127.116 114.758C124.078 114.758 121.614 117.192 121.614 120.195C121.614 123.198 124.078 125.632 127.116 125.632C130.155 125.632 132.618 123.198 132.618 120.195C132.618 117.192 130.155 114.758 127.116 114.758Z"
          fill="#E8F0FE"
        />
        <path
          d="M127.5 126C130.538 126 133 123.538 133 120.5C133 117.462 130.538 115 127.5 115C124.462 115 122 117.462 122 120.5C122 123.538 124.462 126 127.5 126Z"
          stroke="#1F64E7"
          stroke-width="2.5"
        />
        <path
          d="M112 109L119 103.507L112 98.2776"
          stroke="#1F64E7"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M143 109L136 103.507L143 98.2776"
          stroke="#1F64E7"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M137 67C143.509 68.7226 148.648 73.8129 150.44 80.2932"
          stroke="#75A4FE"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <path
          d="M158 50C159.657 50 161 48.6569 161 47C161 45.3431 159.657 44 158 44C156.343 44 155 45.3431 155 47C155 48.6569 156.343 50 158 50Z"
          stroke="#75A4FE"
          stroke-width="2"
        />
        <path
          d="M189 66C190.657 66 192 64.6569 192 63C192 61.3431 190.657 60 189 60C187.343 60 186 61.3431 186 63C186 64.6569 187.343 66 189 66Z"
          fill="#75A4FE"
        />
        <path
          d="M165.757 57.7573L174.116 66.1156M174.243 57.7573L165.884 66.1156L174.243 57.7573Z"
          stroke="#75A4FE"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M71.4038 75.5962L77.4038 81.5962M77.4038 75.5962L71.4038 81.5962L77.4038 75.5962Z"
          stroke="#75A4FE"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M85 69C86.6569 69 88 67.6569 88 66C88 64.3431 86.6569 63 85 63C83.3431 63 82 64.3431 82 66C82 67.6569 83.3431 69 85 69Z"
          fill="#75A4FE"
        />
      </svg>

      <h5 className=" font-medium text-gray-700 ">No tasks, yet</h5>
      <p className="text-gray-800 text-sm mt-2">
        No tasks in your timeline, yet! <br />
        Start adding to identify your free time span.
      </p>
      <Button onClick={openCreateModal} size="middle" shape="round" appearance="primary" className=" mt-3 mb-4">
        Create new
      </Button>
    </article>
  );
};

export default EmptyState;