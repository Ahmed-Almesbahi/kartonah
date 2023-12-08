import React from 'react';

import Spinner from './Spinner';
import {Text, View} from 'react-native-ui-lib';
import styles from 'theme/styles';
import {useTranslation} from 'react-i18next';

export class QueryProps {
  data: any;
  loading: boolean;
  pristine: boolean;
  error: null | string;
  noDataMessage?: string;
  downloadProgress?: number;
  uploadProgress?: number;
  children: any;
  childrenEmpty?: any;
}

const Query = (query: QueryProps) => {
  const {t} = useTranslation();
  if (query?.loading || query?.pristine) {
    return (
      <Spinner
      // downloadProgress={query.downloadProgress}
      // uploadProgress={query.uploadProgress}
      />
    );
  }

  // if (query?.error) {
  //   return (
  //     <View style={styles.spinnerContainer}>
  //       <Text>{query.error}</Text>
  //     </View>
  //   );
  // }

  // if (query.data && query.data.rows) {
  //   if (
  //     (Array.isArray(query.data.rows) && query.data.rows.length === 0) ||
  //     (typeof query.data.row === 'object' && !query.data.row.id)
  //   ) {
  //     return query.childrenEmpty ? (
  //       query.childrenEmpty(query)
  //     ) : (
  //       <View style={styles.spinnerContainer}>
  //         <Text>
  //           {query.noDataMessage !== undefined
  //             ? query.noDataMessage
  //             : t('No results found')}
  //         </Text>
  //       </View>
  //     );
  //   }
  // }
  return query.children(query);
};

export default Query;
