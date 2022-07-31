// Interface
export interface IChatCard {
  nameInitial: string;
  name: string;
  lastMessage: string;
}

// Main
const ChatCard: React.FC<IChatCard> = ({ nameInitial, name, lastMessage }) => {
  return (
    <div className="flex items-center p-3 text-base font-bold text-gray-900 bg-white rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
      <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-400 rounded-full dark:bg-gray-600">
        <span className="font-medium text-white dark:text-gray-300">
          {nameInitial}
        </span>
      </div>
      <div className="flex flex-col ml-4">
        <span className="font-semibold text-gray-800 text-md dark:text-gray-300">
          {name}
        </span>
        <span className="text-xs font-normal text-gray-400 dark:text-gray-300">
          {lastMessage}
        </span>
      </div>
    </div>
  );
};

export default ChatCard;
