
import * as React from 'react';
import { 
  NextUIProvider,
  Button,
  Input,
  Spacer,
  Link,
  Card,
  Grid,
  useTheme, Text

} from '@nextui-org/react';

export default function Home() {
  const colors = [
    'primary',
    'secondary',
    'success',
    'warning',
    'error',
    'gradient'
    
  ]

  return (
    <NextUIProvider>
      
      <h1>Home</h1>
      <div>
        <Link href="/private"><a>Privateへ</a></Link>
      </div>
    </NextUIProvider>
  
  )

}