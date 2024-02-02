import { FC, ReactNode } from 'react';
import { ChevronRight, FileStack, Files, Gamepad2, Github, Share2, Shirt, Ticket, TwitterIcon } from 'lucide-react';
import Link from 'next/link';

interface MoreProjectsCardsProps {
  title: string;
  icon: string;
  href?: string;
  techStack: string;
}

const iconsMap = {
  documents: <FileStack />,
  share: <Share2 />,
  github: <Github />,
  twitter: <TwitterIcon />,
};

const MoreProjectsCards: FC<MoreProjectsCardsProps> = ({
  title,
  href,
  icon,
  techStack,
}) => {
  return (
    <Link target="_blank" href={href || '/'}>
      <div className="flex items-center gap-1 text-primary rounded-lg">
        {
          //@ts-ignore
          iconsMap[icon]
        }
        <div className="flex flex-1 flex-col px-4 py-2">
          <div className="flex text-sm font-medium">{title}</div>
          <div className="flex text-info text-xs ">{techStack}</div>
        </div>
        <ChevronRight />
      </div>
    </Link>
  );
};

export default MoreProjectsCards;
