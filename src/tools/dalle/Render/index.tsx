import { BuiltinRenderProps } from '@lobechat/types';
import { ActionIcon, PreviewGroup } from '@lobehub/ui';
import { Download } from 'lucide-react';
import { memo, useRef } from 'react';
import { Flexbox } from 'react-layout-kit';

import { fileService } from '@/services/file';
import { DallEImageItem } from '@/types/tool/dalle';

import GalleyGrid from './GalleyGrid';
import ImageItem from './Item';

const DallE = memo<BuiltinRenderProps<DallEImageItem[]>>(({ content, messageId }) => {
  console.log(content);
  console.log(messageId)
  return null;
});

export default DallE;
